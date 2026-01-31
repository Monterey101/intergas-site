type PageTitleProps = {
    title: string,
};

export const PageTitle = ({title}: PageTitleProps) => {
    return (
        <div className="flex flex-col p-5 sm:p-10 pt-48 sm:pt-48 w-full">

            <span className="text-6xl">{title}</span>
            <br />
            <div className="w-full h-[1px] bg-black" />
        </div>
    )
}