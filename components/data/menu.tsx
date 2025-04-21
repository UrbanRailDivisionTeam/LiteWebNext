import { TreeViewBaseItem } from '@mui/x-tree-view/models'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'

// 扩展树形结构的相关定义
type ExtendedTreeItemProps = {
    id: string
    label: string
    icon: React.ReactNode
    href: string
}

// 所有树形节点的相关定义
export const items: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
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
        ],
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
            },
        ],
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
            },
        ],
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
    },
]