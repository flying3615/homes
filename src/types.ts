interface Property {
    property_id: string;
    date: string;
    price: number | null;
    sales_count: number;
    url: string;

    solar?: string;

    address: string;
    capital_value: string; // cv = land value + improvement value
    land_value: string;
    improvement_value: string;
    // cover_image_url: string;
    // google_street_view_url: string;

    display_estimated_rental_lower_value: string;
    display_estimated_rental_upper_value: string;


    display_estimated_lower_value: string;
    display_estimated_upper_value: string;

    estimated_rental_yield: string;

    street: string;
    street_number: string;
    suburb: string;

    num_car_spaces: number;

    bath_estimate: number;
    bed_estimate: number;

    floor_area: number;

    decade_built: number;

    has_deck: boolean;

    agent?: string;

}

