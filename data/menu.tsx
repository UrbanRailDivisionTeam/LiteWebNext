import { TreeViewBaseItem } from '@mui/x-tree-view/models'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import ArticleIcon from '@mui/icons-material/Article'
import FolderRounded from '@mui/icons-material/FolderRounded'
import { ExtendedTreeItemProps } from '@/components/sideMenu/FilePageTreeView'

// 所有侧边栏上半部分页面树形节点的相关定义
export const mainListItems: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
    {
        id: '1',
        label: '主页',
        href: '/dashboard',
        icon: HomeRoundedIcon,
    },
    {
        id: '2',
        label: '相关方管理',
        href: '/dashboard/interested_party',
        icon: FolderRounded,
        children: [
            {
                id: '2.1',
                label: '相关方情况分析',
                href: '/dashboard/interested_party/analysis',
                icon: ArticleIcon,
            },
            {
                id: '2.2',
                label: '相关方进入详情',
                href: '/dashboard/interested_party/details',
                icon: ArticleIcon,
            },
        ],
    },
    {
        id: '3',
        label: '综合管理',
        href: '/dashboard/general',
        icon: FolderRounded,
        children: [
            {
                id: '3.1',
                label: '人员效能分析',
                icon: ArticleIcon,
                href: '/dashboard/general/personnel_effectiveness',
            },
            {
                id: '3.2',
                label: '制造差旅分析',
                icon: ArticleIcon,
                href: '/dashboard/general/personnel_traveler',
            },
            {
                id: '3.3',
                label: '工作量预测',
                icon: ArticleIcon,
                href: '/dashboard/general/personnel_workloads',
            },
        ],
    },
    {
        id: '4',
        label: '异常管理',
        href: '/dashboard/error',
        icon: FolderRounded,
        children: [
            {
                id: '4.1',
                label: '生产异常响应分析',
                icon: ArticleIcon,
                href: '/dashboard/error/responsive',
            },
            {
                id: '4.2',
                label: '校线异常分析',
                icon: ArticleIcon,
                href: '/dashboard/error/calibration_line',
            },
            {
                id: '4.3',
                label: '校线异常明细',
                icon: ArticleIcon,
                href: '/dashboard/error/calibration_line_detail',
            },
            {
                id: '4.4',
                label: '异常月报生成',
                icon: ArticleIcon,
                href: '/dashboard/error/report_generation',
            },
        ],
    },
    {
        id: '5',
        label: '改善管理',
        href: '/dashboard/ameliorate',
        icon: FolderRounded,
        children: [
            {
                id: '5.1',
                label: '全员型改善提交分析',
                icon: ArticleIcon,
                href: '/dashboard/ameliorate/submission_of_analyses',
            },
            {
                id: '5.2',
                label: '全员型改善审核分析',
                icon: ArticleIcon,
                href: '/dashboard/ameliorate/audit_analysis',
            },
            {
                id: '5.3',
                label: '改善明细导出',
                icon: ArticleIcon,
                href: '/dashboard/ameliorate/export',
            },
        ],
    },
    {
        id: '6',
        label: '业联管理',
        href: '/dashboard/business_connection',
        icon: FolderRounded,
        children: [
            {
                id: '6.1',
                label: '设计变更转化统计',
                icon: ArticleIcon,
                href: '/dashboard/business_connection/convert',
            },
            {
                id: '6.2',
                label: '设计变更成本统计',
                icon: ArticleIcon,
                href: '/dashboard/business_connection/costs',
            },
        ]
    },
    {
        id: '7',
        label: '计划管理',
        href: '/dashboard/plan',
        icon: FolderRounded,
        children: [
            {
                id: '7.1',
                label: '年月计划管理',
                icon: ArticleIcon,
                href: '/dashboard/plan/plan_management',
            },
            {
                id: '7.2',
                label: '车间工作量评估',
                icon: ArticleIcon,
                href: '/dashboard/plan/workshop_workloads',
            },
        ]
    },
    {
        id: '8',
        label: '城轨通讯录',
        href: '/dashboard/directory',
        icon: ArticleIcon,
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