'use client'
export type CalibrationLineTotalProps = {
    title_name: string
    trend: 'overtime' | 'ontime'
    request_value: number
    request_time: number
    acerage_time: number
}

export const CalibrationLineTotalData: CalibrationLineTotalProps[] = [
    {
        title_name: '未响应异常数',
        trend: 'overtime',
        request_value: 38,
        request_time: 2 * 60,
        acerage_time: 137,
    },
    {
        title_name: '初步诊断进行中流程数',
        trend: 'ontime',
        request_value: 38,
        request_time: 2 * 60,
        acerage_time: 104,
    },
    {
        title_name: '二次诊断进行中流程数',
        trend: 'ontime',
        request_value: 38,
        request_time: 2 * 60,
        acerage_time: 99,
    },
    {
        title_name: '返工进行中流程数',
        trend: 'ontime',
        request_value: 38,
        request_time: 2 * 60,
        acerage_time: 111,
    },
    {
        title_name: '验收进行中流程数',
        trend: 'ontime',
        request_value: 38,
        request_time: 2 * 60,
        acerage_time: 110,
    },
    {
        title_name: '验收合格数',
        trend: 'ontime',
        request_value: 38,
        request_time: 2 * 60,
        acerage_time: 108,
    },
]

export const transCalibrationLineTotalData = (data: any): CalibrationLineTotalProps[] => {
    if (!Array.isArray(data)) {
        console.error('API返回的数据不是数组格式')
        return []
    }
    return data.map((item) => ({
        title_name: String(item.title_name || ''),
        trend: String(item.trend || '') as 'overtime' | 'ontime',
        request_value: Number(item.request_value || 0),
        request_time: Number(item.request_time || 0),
        acerage_time: Number(item.acerage_time || 0),
    }))
}

export type CalibrationLineGroup = {
    title_name: string
    trend: 'inlimit' | 'overlimit'
    group: CalibrationLineGroupProps[]
}

export type CalibrationLineGroupProps = {
    group_name: string
    ontime_value: number
    total_value: number
}

export const CalibrationLineGroupData: CalibrationLineGroup[] = [
    {
        title_name: '异常响应及时率',
        trend: 'overlimit',
        group: [
            {
                group_name: '电工一工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工二工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工三工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工四工位',
                ontime_value: 23,
                total_value: 100,
            },
        ],
    },
    {
        title_name: '初步诊断及时率',
        trend: 'inlimit',
        group: [
            {
                group_name: '电工一工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工二工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工三工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工四工位',
                ontime_value: 23,
                total_value: 100,
            },
        ],
    },
    {
        title_name: '二次诊断及时率',
        trend: 'inlimit',
        group: [
            {
                group_name: '电工一工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工二工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工三工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工四工位',
                ontime_value: 23,
                total_value: 100,
            },
        ],
    },
    {
        title_name: '返工及时率',
        trend: 'inlimit',
        group: [
            {
                group_name: '电工一工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工二工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工三工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工四工位',
                ontime_value: 23,
                total_value: 100,
            },
        ],
    },
    {
        title_name: '验收及时率',
        trend: 'inlimit',
        group: [
            {
                group_name: '电工一工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工二工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工三工位',
                ontime_value: 23,
                total_value: 100,
            },
            {
                group_name: '电工四工位',
                ontime_value: 23,
                total_value: 100,
            },
        ],
    },
]

export const transCalibrationLineGroupData = (data: any): CalibrationLineGroup[] => {
    if (!Array.isArray(data)) {
        console.error('API返回的数据不是数组格式')
        return []
    }
    return data.map((item) => ({
        title_name: String(item.title_name || ''),
        trend: String(item.trend || '') as 'inlimit' | 'overlimit',
        group: item.group.map(
            (groupItem: any): CalibrationLineGroupProps => ({
                group_name: String(groupItem.group_name || ''),
                ontime_value: Number(groupItem.ontime_value || 0),
                total_value: Number(groupItem.total_value || 0),
            })
        ),
    }))
}

export interface PieChartErrorProps {
    id?: number
    label: string
    value: number
}

export interface PieChartErrorType {
    title_name: string
    data: PieChartErrorProps[]
}

export const transPieChartErrorType = (data: any): PieChartErrorType[] => {
    if (!Array.isArray(data)) {
        console.error('API返回的数据不是数组格式')
        return []
    }
    return data.map((item) => ({
        title_name: String(item.title_name || ''),
        data: item.data.map(
            (groupItem: any): PieChartErrorProps => ({
                label: String(groupItem.label || ''),
                value: Number(groupItem.value || 0),
            })
        ),
    }))
}

export const ConfigurationErrorValue: PieChartErrorType = {
    title_name: '本月异常构型组成',
    data: [
        {
            label: '终端',
            value: 15,
        },
        {
            label: '线号',
            value: 20,
        },
        {
            label: '标签',
            value: 25,
        },
        {
            label: '电缆',
            value: 35,
        },
    ],
}

export const ProjectErrorValue: PieChartErrorType = {
    title_name: '本月异常项目占比',
    data: [
        {
            label: '广11',
            value: 15,
        },
        {
            label: 'ETS3',
            value: 20,
        },
        {
            label: 'CJ6三级修',
            value: 25,
        },
        {
            label: '新港线',
            value: 35,
        },
    ],
}

export const SectorErrorValue: PieChartErrorType = {
    title_name: '本月异常责任单位占比',
    data: [
        {
            label: '制造班组',
            value: 15,
        },
        {
            label: '设计',
            value: 20,
        },
        {
            label: '电气工艺',
            value: 25,
        },
        {
            label: '供应商',
            value: 35,
        },
        {
            label: '机车事业部管线班',
            value: 35,
        },
        {
            label: '调试工艺',
            value: 35,
        },
        {
            label: '生产管理',
            value: 35,
        },
        {
            label: '物流',
            value: 35,
        },
    ],
}

export const TypesErrorValue: PieChartErrorType = {
    title_name: '本月异常类型组成',
    data: [
        {
            label: '后工序意外',
            value: 15,
        },
        {
            label: '执行错误',
            value: 20,
        },
        {
            label: '来料、接口错误',
            value: 25,
        },
        {
            label: '工艺疏漏',
            value: 35,
        },
        {
            label: '缺失',
            value: 35,
        },
    ],
}
