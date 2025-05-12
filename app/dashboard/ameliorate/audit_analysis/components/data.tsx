export type AmeliorateAuditProps = {
    person_name: string
    trend: 'completed' | 'not_completed'
    department: string
    wait_data: number
    complete_data: number
    request_data: number
    children?: AmeliorateAuditProps[]
}

export const AmeliorateAuditData: AmeliorateAuditProps[] = [
    {
        person_name: '刘成华',
        department: '总成车间',
        trend: 'completed',
        wait_data: 40, // 待审核数
        complete_data: 1, // 已审核数
        request_data: 86, // 指标数
        children: [
            {
                person_name: '彭亮',
                department: '管钳一工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '李浩',
                department: '电工一工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '刘福波',
                department: '内装一工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '徐治熙',
                department: '管钳三工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '黄朝',
                department: '电工三工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '罗新平',
                department: '内装三工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '张飞',
                department: '电工五工位',
                trend: 'completed',
                wait_data: 9,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '李韬',
                department: '粘接二工位',
                trend: 'completed',
                wait_data: 9,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '刘增',
                department: '粘接一工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '李文兵',
                department: '设备工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '齐星伏',
                department: '电工四工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '黄文',
                department: '内装四工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '刘海',
                department: '车门工位',
                trend: 'completed',
                wait_data: 7,
                complete_data: 1,
                request_data: 1,
            },
        ],
    },
    {
        person_name: '王梓骅',
        department: '交车车间',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
        request_data: 38,
        children: [
            {
                person_name: '何佳',
                department: '落车班',
                trend: 'completed',
                wait_data: 4,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '黄远嘉',
                department: '调车班',
                trend: 'completed',
                wait_data: 4,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '唐鹰龙',
                department: '校线一班',
                trend: 'completed',
                wait_data: 4,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '沈如庭',
                department: '校线二班',
                trend: 'completed',
                wait_data: 4,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '李鹏',
                department: '调试一班',
                trend: 'completed',
                wait_data: 6,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '邓长贵',
                department: '调试二班',
                trend: 'completed',
                wait_data: 6,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '谢海龙',
                department: '调试三班',
                trend: 'completed',
                wait_data: 6,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '王文珍',
                department: '调试四班',
                trend: 'completed',
                wait_data: 6,
                complete_data: 1,
                request_data: 1,
            },
        ],
    },
    {
        person_name: '郭永',
        department: '质量技术部',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
        request_data: 22,
        children: [
            {
                person_name: '黄力卓',
                department: '质量保证组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '李鹏',
                department: '交付质量组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '苏锐',
                department: '过程质量组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '毛幸福',
                department: '粘接组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '韦海营',
                department: '内装组',
                trend: 'completed',
                wait_data: 2,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '张权',
                department: '机械组',
                trend: 'completed',
                wait_data: 2,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '张亚',
                department: '电气组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '刘滨祥',
                department: '调试组',
                trend: 'completed',
                wait_data: 2,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '曾海燕',
                department: '总体技术组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '杨昊',
                department: '技术管理组',
                trend: 'completed',
                wait_data: 2,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '胡谦',
                department: '精益信息化组',
                trend: 'completed',
                wait_data: 2,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '林长春',
                department: '检查班',
                trend: 'completed',
                wait_data: 5,
                complete_data: 1,
                request_data: 1,
            },
        ],
    },
    {
        person_name: '刘畅',
        department: '项目工程部',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
        request_data: 9,
        children: [
            {
                person_name: '刘瀚彬',
                department: '交车进程组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '雷松',
                department: '生产管理组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '李兵',
                department: '现场安全组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '姜里昂',
                department: '计划管理组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '陈一夫',
                department: '设备管理组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '刘畅',
                department: '总成进程组',
                trend: 'completed',
                wait_data: 4,
                complete_data: 1,
                request_data: 1,
            },
        ],
    },
    {
        person_name: '邹靖兰',
        department: '综合管理部',
        trend: 'completed',
        wait_data: 2,
        complete_data: 1,
        request_data: 4,
        children: [
            {
                person_name: '陈宇杰、王阔',
                department: '人力资源组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 2,
            },
            {
                person_name: '兰芬芬',
                department: '经营计划组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '刘韵',
                department: '财务管理组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
            {
                person_name: '邹靖兰',
                department: '行政管理组',
                trend: 'completed',
                wait_data: 1,
                complete_data: 1,
                request_data: 1,
            },
        ],
    },
]
// 当前所有待审核数
export const TotalWaitData = AmeliorateAuditData.reduce((acc, cur) => acc + cur.wait_data, 0)

export const DepartmentData = AmeliorateAuditData.map((ch, index) => ({
    label: `${ch.department}-${ch.person_name}`,
    value: Math.floor((ch.wait_data / TotalWaitData) * 100),
    color: `hsl(220, 25%, ${75 - index * 15}%)`,
}))

export const DepartmentValue = DepartmentData.map((ch, _) => ({
    label: ch.label,
    value: ch.value,
}))

export function data_process(input_ch?: AmeliorateAuditProps[]) {
    let title_data = []
    let complete_data = []
    let not_complete_data = []
    let completed_index = 0
    let children_len = 0
    if (input_ch !== undefined) {
        children_len = input_ch?.length
        for (let variable of input_ch) {
            title_data.push(variable.person_name)
            complete_data.push(variable.complete_data)
            not_complete_data.push(variable.wait_data)
            if (variable.trend === 'completed') {
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
