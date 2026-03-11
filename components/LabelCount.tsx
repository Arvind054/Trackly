import React from 'react'

type Props = {
    title: string,
    info: number | undefined |string | null
}

export default function LabelCount({ title, info }: Props) {
    return (
        <div>
            <p className='text-sm text-neutral-400 mb-1'>{title}</p>
            <p className='font-bold text-2xl text-neutral-100'>{info ?? '-'}</p>
        </div>
    )
}