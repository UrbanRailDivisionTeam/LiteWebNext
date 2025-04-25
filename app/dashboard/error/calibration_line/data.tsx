export const CardTexts = {
    ontime: '良好' as const,
    overtime: '平均用时较长' as const,
}

export const CardColors = {
    ontime: 'success' as const,
    overtime: 'error' as const,
}

export const labelTexts = {
    inlimit: '及时率良好' as const,
    overlimit: '及时率较低' as const,
}

export const labelColors = {
    inlimit: 'success' as const,
    overlimit: 'error' as const,
}

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

export function data_process(input_ch?: CalibrationLineGroupProps[]) {
    let title_data = []
    let complete_data = []
    let total_index = 0
    let complete_index = 0
    if (input_ch !== undefined) {
        for (let variable of input_ch) {
            title_data.push(variable.group_name)
            complete_data.push(Math.round((variable.ontime_value / variable.total_value) * 10000) / 100)
            complete_index += variable.ontime_value
            total_index += variable.total_value
        }
    }
    title_data.sort()
    return { title_data, complete_data, total_index, complete_index }
}
