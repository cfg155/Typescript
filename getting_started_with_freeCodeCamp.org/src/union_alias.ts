type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

interface UserInterface {
    name: string,
    surname: string
}

const popularTags: PopularTag[] = ['dragon','coffee']

const dragonTag: MaybePopularTag = null

let username = "alex"

let pagename: string | number = "1"

let errMsg:string | null = null

let newUser: UserInterface | null = null

let someProp : string | number | null | undefined | string[] | object