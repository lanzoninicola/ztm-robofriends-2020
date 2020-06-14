import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {



    return (
        <section>
            <div>
                {
                    robots.map((user, id) => {
                        return <Card key={id} id={user.id} name={user.name} email={user.email} />
                    })
                }
            </div>
        </section>
    );
}


export default CardList