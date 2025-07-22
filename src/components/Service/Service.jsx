import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [service, setservice]= useState([]);

    useEffect(()=>{
        fetch('/blog.json')
        .then(res => res.json())
        .then(data=> setservice(data))
    },[])
    return (
        <div>
            <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10 uppercase">Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    service.map(servicedetail => <ServiceDetails servicedetail={servicedetail} key={servicedetail.id}></ServiceDetails>)
                }
            </div>
            </section>
        </div>
    );
};

export default Service;