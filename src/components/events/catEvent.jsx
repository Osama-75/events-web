import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1> Events in {pageName} </h1>

      <div className="content">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <div className="card">
              <Image width={400} height={400} alt={ev.title} src={ev.image} />
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;