type Props = {
    title:string
}

const Title = ({title}: Props) => {
    return (
        <div className="my-4 flex justify-center">
            <div className="text-lg w-11/12 flex justify-start border-b-2 border-color05 pb-2">
                {title}
            </div>
        </div>
    )
}

export default Title