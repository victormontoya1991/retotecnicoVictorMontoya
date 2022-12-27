import './Main.scss'

export const Main = () => {
    return(
        <main id='MainList'>
            <article className='ListCard' id='ListCard'>
                <section className='CardDate'>
                    <p className='NumbCard'> 0000 0000 0000 0000 </p>
                    <p className='NameCard'> Victor Montoya </p>
                    <p className='DateCard'> 00 / 00 </p>
                    <button className='ButtonCard'> Eliminar</button>
                </section>
            </article>
            <button className='NewCard'> Nueva Tarjeta</button>
        </main>
    )
}