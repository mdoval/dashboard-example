export function CatalogoSkeleton() {
    return <span className="loading loading-ring loading-lg"></span>
}

export function TortaSkeleton() {
    return (
        <div className="border m-4 shadow-lg">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    )
}