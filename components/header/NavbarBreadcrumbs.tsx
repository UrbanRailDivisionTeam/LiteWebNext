'use client'
import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import { mainListItems } from '@/data/menu'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    [`& .${breadcrumbsClasses.separator}`]: {
        color: (theme.vars || theme).palette.action.disabled,
        margin: 1,
    },
    [`& .${breadcrumbsClasses.ol}`]: {
        alignItems: 'center',
    },
}))

// 递归查找菜单项的标签
function findMenuLabel(path: string, items: typeof mainListItems): string {
    for (const item of items) {
        if (item.href === path) {
            return item.label
        }
        if (item.children) {
            const label = findMenuLabel(path, item.children)
            if (label) return label
        }
    }
    return ''
}

export default function NavbarBreadcrumbs() {
    const pathname = usePathname()

    // 将路径转换为面包屑数组
    const pathSegments =
        pathname
            ?.split('/')
            .filter((segment) => segment !== '')
            .reduce<Array<{ label: string; path: string }>>((acc, segment, index, array) => {
                const currentPath = '/' + array.slice(0, index + 1).join('/')
                const menuLabel = findMenuLabel(currentPath, mainListItems)
                acc.push({
                    label: menuLabel || segment.charAt(0).toUpperCase() + segment.slice(1),
                    path: currentPath,
                })
                return acc
            }, []) || []

    return (
        <StyledBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextRoundedIcon fontSize="small" />}>
            {pathSegments.map((segment, index) =>
                index === pathSegments.length - 1 ? (
                    <Typography
                        key={segment.path}
                        variant="body1"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            cursor: 'default',
                        }}
                    >
                        {segment.label}
                    </Typography>
                ) : (
                    <Link key={segment.path} href={segment.path} style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontWeight: 400,
                                cursor: 'pointer',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            {segment.label}
                        </Typography>
                    </Link>
                )
            )}
        </StyledBreadcrumbs>
    )
}
