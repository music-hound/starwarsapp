const peopleFilter = ( people, filterSelect ) => {
    switch (filterSelect) {
        case 'brown':
            return people.filter((pers) => pers.eye_color === 'brown')
        case 'red':
            return people.filter((pers) => pers.eye_color === 'red')
        case 'blue':
            return people.filter((pers) => pers.eye_color === 'blue')
        case 'white':
            return people.filter((pers) => pers.eye_color === 'white')
        default:
            return people
    }
}
export default peopleFilter;