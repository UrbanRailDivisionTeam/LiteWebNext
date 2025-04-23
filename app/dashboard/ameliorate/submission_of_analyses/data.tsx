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
                title: '指标完成率',
                trend: 'not_completed',
                complete_data: 50,
                total_data: 60,
            },
        ]
    },
    {
        title: '项目工程部',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
    },
    {
        title: '综合管理部',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
    },
    {
        title: '总成车间',
        trend: 'not_completed',
        complete_data: 50,
        total_data: 60,
    },
    {
        title: '交车车间',
        trend: 'completed',
        complete_data: 50,
        total_data: 60,
    },
]