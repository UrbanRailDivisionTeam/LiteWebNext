export type AmeliorateAuditProps = {
    person_name: string
    trend: 'completed' | 'not_completed'
    wait_data: number
    complete_data: number
}

export const AmeliorateAuditData: AmeliorateAuditProps[] = [
    {
        person_name: '张三',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
    },
    {
        person_name: '李四',
        trend: 'not_completed',
        wait_data: 2,
        complete_data: 0,
    },
    {
        person_name: '王五',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
    },
    {
        person_name: '赵六',
        trend: 'not_completed',
        wait_data: 2,
        complete_data: 0,
    },
    {
        person_name: '孙七',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
    }
]