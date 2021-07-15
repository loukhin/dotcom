interface Props {
    className?: string
    size?: number
    name: string
}

const Emote: React.FC<Props> = (props) => {
    return (
        <div className={`inline-block w-${props.size || 16} h-${props.size || 16} ${props.className || ''}`}>
            <img draggable={false} alt={props.name} src={`/emotes/${props.name}.png`} />
        </div>
    )
}

export default Emote
