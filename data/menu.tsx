import { TreeViewBaseItem } from '@mui/x-tree-view/models'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import ArticleIcon from '@mui/icons-material/Article'
import DeleteIcon from '@mui/icons-material/Delete'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ImageIcon from '@mui/icons-material/Image'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import FolderRounded from '@mui/icons-material/FolderRounded'

import { ExtendedTreeItemProps } from '@/components/sideMenu/FilePageTreeView'

// 所有侧边栏上半部分页面树形节点的相关定义
export const mainListItems: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
    {
        id: '1',
        label: '主页',
        href: '/dashboard',
        icon: FolderRounded,
    },
    {
        id: '2',
        label: '相关方管理',
        href: '/dashboard',
        icon: FolderRounded,
        children: [
            {
                id: '2.1',
                label: '相关方情况分析',
                href: '/dashboard',
                icon: ArticleIcon,
            },
            {
                id: '2.2',
                label: '相关方进入详情',
                href: '/dashboard',
                icon: ArticleIcon,
            },
        ],
    },
    {
        id: '3',
        label: '综合管理',
        href: '/dashboard',
        icon: FolderRounded,
        children: [
            {
                id: '3.1',
                label: '人员效能分析',
                icon: SettingsRoundedIcon,
                href: '/dashboard',
            },
            {
                id: '3.2',
                label: '制造差旅分析',
                icon: SettingsRoundedIcon,
                href: '/dashboard',
            },
            {
                id: '3.3',
                label: '员工工作量预测',
                icon: SettingsRoundedIcon,
                href: '/dashboard',
            },
        ],
    },
    {
        id: '4',
        label: '异常管理',
        href: '/dashboard',
        icon: FolderRounded,
        children: [
            {
                id: '4.1',
                label: '月度异常响应及时分析',
                icon: HelpRoundedIcon,
                href: '/dashboard',
            },
            {
                id: '4.2',
                label: '校线异常分析',
                icon: HelpRoundedIcon,
                href: '/dashboard',
            },
            {
                id: '4.3',
                label: '异常相关明细导出',
                icon: HelpRoundedIcon,
                href: '/dashboard',
            },
        ],
    },
    {
        id: '5',
        label: '改善管理',
        href: '/dashboard',
        icon: FolderRounded,
        children: [
            {
                id: '5.1',
                label: '全员型改善提交分析',
                icon: InfoRoundedIcon,
                href: '/dashboard',
            },
            {
                id: '5.2',
                label: '全员型改善审核分析',
                icon: InfoRoundedIcon,
                href: '/dashboard',
            },
            {
                id: '5.3',
                label: '改善详情导出',
                icon: InfoRoundedIcon,
                href: '/dashboard',
            },
        ],
    },
    {
        id: '6',
        label: '业联管理',
        href: '/dashboard',
        icon: FolderRounded,
    },
    {
        id: '7',
        label: '计划管理',
        href: '/dashboard',
        icon: FolderRounded,
    },
    {
        id: '8',
        label: '城轨通讯录',
        href: '/dashboard',
        icon: FolderRounded,
    },
]

// 所有侧边栏下半部分设置的相关定义
export const secondaryListItems = [
    { 
        label: '设置', 
        icon: <SettingsRoundedIcon /> 
    },
    { 
        label: '关于', 
        icon: <InfoRoundedIcon /> 
    },
]