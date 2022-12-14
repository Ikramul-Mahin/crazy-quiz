import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { id, logo, name, total } = category
    return (
        <div className=''>



            {/* <p> <Link to={`/home/${id}`}>{name}</Link></p> */}

            <div className="card w-96 glass">
                <figure><img src={logo} alt="car!" /></figure>
                <div className="card-body text-left">
                    <div className=''>  <h2 className="card-title text-2xl">{name}</h2> </div>
                    <div>  <h2 className='text-xl'>Total-Quiz:{total}</h2></div>
                </div>
                <div className='card-actions w-full ml-8'>
                    <button className='btn btn-primary '> <p> <Link to={`/home/${id}`}>{name}</Link></p> </button>
                </div>
            </div>

        </div>
    );
};

export default Category;