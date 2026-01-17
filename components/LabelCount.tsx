import React from 'react'

type Props = {
    title: string,
    info: number | undefined |string | null
}

export default function LabelCount({ title, info }: Props) {
    return (
        <div>
            <h2>{title}</h2>
            <h2 className='font-bold text-2xl'>{info}</h2>
        </div>
    )
}