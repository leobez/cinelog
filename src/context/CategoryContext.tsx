import { createContext, useState } from "react";

export type CategoryContextType = {
    category: string;
    changeCategory: (newCategory:string) => void;
}

const CategoryContext = createContext<CategoryContextType|null>(null)

export const CategoryContextProvider = ({children}:any) => {

    const [category, setCategory] = useState<string>('top_rated')

    const changeCategory = (newCategory:string):void => {
        setCategory(newCategory)
    }

    return (
        <CategoryContext.Provider value={{category, changeCategory}}>
            {children}
        </CategoryContext.Provider>
    )

}

export default CategoryContext
