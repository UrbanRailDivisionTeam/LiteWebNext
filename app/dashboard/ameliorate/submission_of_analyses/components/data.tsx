export type AmeliorateSumbitProps = {
    title: string
    trend: 'completed' | 'not_completed'
    total_data: number
    complete_data: number
    children?: AmeliorateSumbitProps[]
}

export const AmeliorateSumbitData: AmeliorateSumbitProps[] = [
    {
        title: '质量技术部',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
        children: [
            {
                title: '技术管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '电气组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '调试组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '总体技术组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '内装组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '机械组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '粘接组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '过程质量组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '质量保证组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '交付质量组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '精益信息化组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
        ],
    },
    {
        title: '项目工程部',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
        children: [
            {
                title: '交车进程组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '生产管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '现场安全组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '计划管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '进程服务班',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '总成进程组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
        ],
    },
    {
        title: '综合管理部',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
        children: [
            {
                title: '人力资源组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '经营计划组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '行政管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '财务管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
        ],
    },
    {
        title: '总成车间',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
        children: [
            {
                title: '总成生产管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '总成生产进程组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '管钳二工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '电工二工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '内装二工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '管钳一工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '电工一工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '内装一工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '管钳三工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '电工三工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '内装三工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '电工五工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '粘接二工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '粘接一工位',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
        ],
    },
    {
        title: '交车车间',
        trend: 'completed',
        complete_data: 50,
        total_data: 60,
        children: [
            {
                title: '技术管理组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '电气组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '调试组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '总体技术组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '内装组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '机械组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '粘接组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '过程质量组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '质量保证组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '交付质量组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
            {
                title: '精益信息化组',
                trend: 'completed',
                complete_data: 50,
                total_data: 60,
            },
        ],
    },
]

export function data_process(input_ch?: AmeliorateSumbitProps[]) {
    let title_data = []
    let complete_data = []
    let not_complete_data = []
    let completed_index = 0
    let children_len = 0
    if (input_ch !== undefined) {
        children_len = input_ch?.length
        for (let variable of input_ch) {
            title_data.push(variable.title)
            complete_data.push(variable.complete_data)
            not_complete_data.push(variable.total_data - variable.complete_data)
            if (variable.complete_data >= variable.total_data) {
                completed_index += 1
            }
        }
    }
    title_data.sort()
    return { title_data, complete_data, not_complete_data, completed_index, children_len }
}

export const labelTextColors = {
    completed: 'success' as const,
    not_completed: 'default' as const,
}

export const labelColors = {
    completed: 'success' as const,
    not_completed: 'error' as const,
}

export const labelTexts = {
    completed: '已完成' as const,
    not_completed: '未完成' as const,
}

export const labelTimeTexts = {
    overtime: '良好' as const,
    ontime: '平均用时较长' as const,
}
