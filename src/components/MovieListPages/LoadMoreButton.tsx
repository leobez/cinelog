import Button from "../Button"

type Props = {
    LoadMoreFunc:()=>void
    loadingState:boolean
}

const LoadMoreButton = ({LoadMoreFunc, loadingState}: Props) => {
    return (
        <div className="flex justify-center bg-rose-700 rounded-lg shadow-lg p-5">
            <div className="w-11/12 flex justify-end text-sm">
                <Button text={'Load more +'} loading={loadingState} func={LoadMoreFunc}/>
            </div>
        </div>
    )
}

export default LoadMoreButton