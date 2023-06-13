import Image from 'next/image'

type Props = {
    size: number,
    name: string,
    classes: string
}
const Icon = (props: Props) => {
    return (
        <Image unoptimized className={`${props.classes}`} width={props.size} alt={props.name} height={props.size} src={`/${props.name}`} />
    )
}

export default Icon
