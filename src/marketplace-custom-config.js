/*
 * Marketplace specific configuration.
 */

export const amenities = [{
    key: 'dog',
    label: 'Dogs',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
{
    key: 'rptile',
    label: 'Rptiles',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
{
    key: 'farm',
    label: 'Farm Animals',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
{
    key: 'cat',
    label: 'Cats',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},

{
    key: 'rabbit',
    label: 'Rabbits',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},

{
    key: 'bird',
    label: 'Pet Birds',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
{
    key: 'fish',
    label: 'Aquarium Fish',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
{
    key: 'horse',
    label: 'Horse',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
{
    key: 'other',
    label: 'Other (Please state)',
    weight: [{
            key: 'giant',
            label: '(101+ lbs)',
        },
        {
            key: 'large',
            label: '(41-100 lbs)',
        },
        {
            key: 'medium',
            label: '(101+ lbs)',
        },
        {
            key: 'small',
            label: '(0-15 lbs)',
        },
    ],
},
];

export const categories = [
{ key: 'petowners', label: 'Pet Owners' },
{ key: 'petsitter', label: 'Pet Sitter' },
{ key: 'petservices', label: 'Pet Services' },
];

export const equipments = [
{ key: 'wifi', label: 'Wifi' },
{ key: 'garden', label: 'Garden' },
{ key: 'wheelchair', label: 'Wheelchair Access' },
{ key: 'parking', label: 'Parking' },
{ key: 'transport', label: 'Transport Links' },
{ key: 'cable', label: 'Cable TV' },
{ key: 'elevator', label: 'Elevator in Building' },
{ key: 'aircon', label: 'Air Con' },
{ key: 'suitable', label: 'Suitable for families' },
{ key: 'laundry', label: 'Laundry Facilities' },

];
export const locations = [
{ key: 'sea', label: 'By the Sea' },
{ key: 'mountain', label: 'Mountain Views' },
{ key: 'city', label: 'City Pad' },
{ key: 'suburbs', label: 'Suburbs' },
{ key: 'rural', label: 'Rural Location' },
];
export const size = [
{ key: 'giant', label: 'Giant' },
{ key: 'large', label: 'Large' },
{ key: 'medium', label: 'Medium' },
{ key: 'small', label: 'Small' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
min: 0,
max: 1000,
step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
active: true,
};
