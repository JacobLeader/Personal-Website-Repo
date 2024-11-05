export default function Navitem({title, page}) {
    return (
        <a href={`/${page}`}>
            <div className="font-JetBrains text-darkGray text-2xl px-16">{title}</div>
        </a>
    )
}