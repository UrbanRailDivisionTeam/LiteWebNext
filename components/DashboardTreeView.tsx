import * as React from 'react'
import clsx from 'clsx'
import { animated, useSpring } from '@react-spring/web'
import { TransitionProps } from '@mui/material/transitions'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import { unstable_useTreeItem2 as useTreeItem2, UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2'
import { TreeItem2Content, TreeItem2IconContainer, TreeItem2Label, TreeItem2Root } from '@mui/x-tree-view/TreeItem2'
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon'
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider'
import { TreeViewBaseItem } from '@mui/x-tree-view/models'
import { useTheme } from '@mui/material/styles'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'

type ExtendedTreeItemProps = {
    id: string
    label: string
    icon: React.ReactNode
    href: string
}

const ITEMS: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
    {
        id: '1',
        label: '主页',
        icon: <HomeRoundedIcon />,
        href: '/dashboard',
    },
    {
        id: '2',
        label: '相关方管理',
        icon: <HomeRoundedIcon />,
        href: '/dashboard',
        children: [
            { 
                id: '2.1', 
                label: '相关方情况分析', 
                icon: <HomeRoundedIcon />,
                href: '/dashboard',
            },
            { 
                id: '2.2', 
                label: '相关方进入详情', 
                icon: <HomeRoundedIcon />,
                href: '/dashboard',
            },
        ],
    },
    {
        id: '3',
        label: '综合管理',
        icon: <SettingsRoundedIcon />,
        href: '/dashboard',
        children: [
            { 
                id: '3.1', 
                label: '人员效能分析', 
                icon: <SettingsRoundedIcon />,
                href: '/dashboard',
            },
            { 
                id: '3.2', 
                label: '制造差旅分析', 
                icon: <SettingsRoundedIcon />,
                href: '/dashboard',
            },
            { 
                id: '3.3', 
                label: '员工工作量预测', 
                icon: <SettingsRoundedIcon />,
                href: '/dashboard',
            },
        ]
    },
    {
        id: '4',
        label: '异常管理',
        icon: <HelpRoundedIcon />,
        href: '/dashboard',
        children: [
            {
                id: '4.1',
                label: '月度异常响应及时分析',
                icon: <HelpRoundedIcon />,
                href: '/dashboard',
            }, 
            {
                id: '4.2',
                label: '校线异常分析',
                icon: <HelpRoundedIcon />,
                href: '/dashboard',
            },
            {
                id: '4.3',
                label: '异常相关明细导出',
                icon: <HelpRoundedIcon />,
                href: '/dashboard',
            }
        ]
    },
    {
        id: '5',
        label: '改善管理',
        icon: <InfoRoundedIcon />,
        href: '/dashboard',
        children: [
            {
                id: '5.1',
                label: '全员型改善提交分析',
                icon: <InfoRoundedIcon />,
                href: '/dashboard', 
            },
            {
                id: '5.2',
                label: '全员型改善审核分析',
                icon: <InfoRoundedIcon />,
                href: '/dashboard',
            },
            {
                id: '5.3',
                label: '改善详情导出',
                icon: <InfoRoundedIcon />,
                href: '/dashboard',
            }
        ]
    },
    {
        id: '6',
        label: '业联管理',
        icon: <InfoRoundedIcon />,
        href: '/dashboard',
    },
    {
        id: '7',
        label: '计划管理',
        icon: <InfoRoundedIcon />,
        href: '/dashboard',
    },
    {
        id: '8',
        label: '城轨通讯录',
        icon: <InfoRoundedIcon />,
        href: '/dashboard',
    }
]

function DotIcon({ color }: { color: string }) {
    return (
        <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}>
            <svg width={6} height={6}>
                <circle cx={3} cy={3} r={3} fill={color} />
            </svg>
        </Box>
    )
}

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
    children: React.ReactNode
    color?: Color
    expandable?: boolean
}

function CustomLabel({ color, expandable, children, ...other }: CustomLabelProps) {
    const theme = useTheme()
    const colors = {
        blue: (theme.vars || theme).palette.primary.main,
        green: (theme.vars || theme).palette.success.main,
    }

    const iconColor = color ? colors[color] : null
    return (
        <TreeItem2Label {...other} sx={{ display: 'flex', alignItems: 'center' }}>
            {iconColor && <DotIcon color={iconColor} />}
            <Typography className="labelText" variant="body2" sx={{ color: 'text.primary' }}>
                {children}
            </Typography>
        </TreeItem2Label>
    )
}

interface CustomTreeItemProps extends Omit<UseTreeItem2Parameters, 'rootRef'>, Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> { }

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props: CustomTreeItemProps, ref: React.Ref<HTMLLIElement>) {
    const { id, itemId, label, disabled, children, ...other } = props

    const { getRootProps, getContentProps, getIconContainerProps, getLabelProps, getGroupTransitionProps, status, publicAPI } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref })

    const item = publicAPI.getItem(itemId)
    const color = item?.color
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
                >
                    {status.expandable && (
                        <TreeItem2IconContainer {...getIconContainerProps()}>
                            <TreeItem2Icon status={status} />
                        </TreeItem2IconContainer>
                    )}

                    <CustomLabel {...getLabelProps({ color })} />
                </TreeItem2Content>
                {children && <TransitionComponent {...getGroupTransitionProps({ className: 'groupTransition' })} />}
            </TreeItem2Root>
        </TreeItem2Provider>
    )
})

export default function CustomizedTreeView() {
    return (
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2">
                    Product tree
                </Typography>
                <RichTreeView
                    items={ITEMS}
                    aria-label="pages"
                    multiSelect
                    defaultExpandedItems={['1', '1.1']}
                    defaultSelectedItems={['1.1', '1.1.1']}
                    sx={{
                        m: '0 -8px',
                        pb: '8px',
                        height: 'fit-content',
                        flexGrow: 1,
                        overflowY: 'auto',
                    }}
                    slots={{ item: CustomTreeItem }}
                />
            </CardContent>
        </Card>
    )
}
