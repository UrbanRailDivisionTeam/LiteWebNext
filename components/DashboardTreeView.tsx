import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { TransitionProps } from '@mui/material/transitions'

import Collapse from '@mui/material/Collapse'

import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import { unstable_useTreeItem2 as useTreeItem2, UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2'
import { TreeItem2Content, TreeItem2IconContainer, TreeItem2Root } from '@mui/x-tree-view/TreeItem2'
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon'
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider'

import { items } from '@/components/data/menu'

const AnimatedCollapse = animated(Collapse)

function TransitionComponent(props: TransitionProps) {
    const style = useSpring({
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
        },
    })

    return <AnimatedCollapse style={style} {...props} />
}

interface CustomLabelProps {
    icon: React.ReactNode
    href: string
    text: string
}

function CustomLabel({ icon, href, text }: CustomLabelProps) {
    return (
        <ListItem dense disablePadding sx={{ display: 'block' }}>
            <ListItemButton disableGutters>
                <ListItemIcon>{icon}</ListItemIcon>
                <Link href={href}>
                    <ListItemText primary={text} />
                </Link>
            </ListItemButton>
        </ListItem>
    )
}

interface CustomTreeItemProps extends Omit<UseTreeItem2Parameters, 'rootRef'>, Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props: CustomTreeItemProps, ref: React.Ref<HTMLLIElement>) {
    const { id, itemId, label, disabled, children, ...other } = props

    const { getRootProps, getContentProps, getIconContainerProps, getLabelProps, getGroupTransitionProps, status, publicAPI } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref })

    const item = publicAPI.getItem(itemId)
    return (
        <TreeItem2Provider itemId={itemId}>
            <TreeItem2Root {...getRootProps(other)}>
                <TreeItem2Content
                    {...getContentProps({
                        className: clsx('content', {
                            expanded: status.expanded,
                            selected: status.selected,
                            focused: status.focused,
                            disabled: status.disabled,
                        }),
                    })}
                    sx={{ m: 0, p: 0 }}
                >
                    {status.expandable && (
                        <TreeItem2IconContainer {...getIconContainerProps()}>
                            <TreeItem2Icon status={status} />
                        </TreeItem2IconContainer>
                    )}

                    <CustomLabel icon={item?.icon} href={item?.href} text={item?.label} />
                </TreeItem2Content>
                {children && <TransitionComponent {...getGroupTransitionProps({ className: 'groupTransition' })} />}
            </TreeItem2Root>
        </TreeItem2Provider>
    )
})

export default function CustomizedTreeView() {
    return (
        <RichTreeView
            items={items}
            aria-label="pages"
            multiSelect
            sx={{
                m: '0 -8px',
                pb: '8px',
                height: 'fit-content',
                flexGrow: 1,
                overflowY: 'auto',
            }}
            slots={{ item: CustomTreeItem }}
        />
    )
}
