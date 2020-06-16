import React from 'react'


const Card = ({ id, name, email }) => {

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={'robot' + id} src={`https://robohash.org/${id}`} />
            <div>
                <h2 className="tc f3 helvetica">{name}</h2>
                <p className="tc helvetica">{email}</p>
            </div>
        </div>
    );
}


export default Card