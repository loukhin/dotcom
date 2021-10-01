interface Props {
    parentClassName?: string
    className?: string
    color?: string
    size?: string
    width: string
}

const Box: React.FC<Props> = (props) => {
    const color = props.color ? `bg-${props.color}` : ''

    const getSize = () => {
        const size = props.size === 'small' ? '24' : '80'

        if (props.width === 'square') {
            if (props.size === 'small') {
                return `w-flex-1/2 pt-flex-1/2 sm:p-0 sm:w-24 h-0 sm:h-24`
            }
            return `w-flex-1/2 pt-flex-1/2 md:p-0 md:w-80 h-0 md:h-80`
        } else if (props.width === '1/2') {
            return `w-full lg:w-flex-1/2 h-${size}`
        }

        return `w-${props.width} h-${size}`
    }

    return (
        <div className={`relative ${color} m-2 flex-shrink ${getSize()} ${props.parentClassName || ''}`}>
            <div className={`absolute inset-0 ${props.size === 'small' ? 'p-2 sm:p-3' : 'p-3 sm:p-4'} overflow-hidden ${props.className || ''}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Box
