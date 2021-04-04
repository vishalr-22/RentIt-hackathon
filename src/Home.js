import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <a target="_blank" href="https://insider.in/online-events-india/article" className="t2">
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            </a>
            <a target="_blank" href="https://www.quirkyaccom.com/all-listings/india" className="t2">
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep and rejuvenate yourself"
            />
            </a>
            <a target="_blank" href="https://www.airbnb.co.in/s/homes?ne_lat=40.53927453041205&ne_lng=95.62879574787104&sw_lat=-2.57927453041205&sw_lng=50.031204252128965&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE" className="t2">
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </a>
            </div>
            <div className='home__section'>
            <a target="_blank" href="https://www.magicbricks.com/propertyDetails/1-BHK-100-Sq-ft-Residential-House-FOR-Rent-in-Mumbai&id=4d423439363536353638" className="t2">
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Luxury 1BHK Apartments"
                description="Superhost with a stunning view of the beachside in Sunny Weather"
                price="Starting from ₹3000/night"
            />
            </a>
            <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies" className="t2">
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Bandra"
                description="Enjoy the amazing sights of Mumbai sea face"
                price="Starting from ₹30,000/night"
            />
            </a>
            <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies" className="t2">
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="2 BHK apartments in Colaba"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="Starting from ₹15,000/night"
            />
            </a>
            </div>
        </div>
    )
}

export default Home
