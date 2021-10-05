import React from "react";
import useBrands from "./brand";
import useCategories from "./category";


const GlobalStateContext = React.createContext({
    categories: [],
    brands: [],
  });
  
  export function GlobalStateProvider(props) {
    const { data: categories, error: errCategories, isLoading: loadingCategories, mutate: mutateCategories } = useCategories();
    const { data: brands, error: errBrands, isLoading: loadingBrands, mutate: mutateBrands } = useBrands();

  
   
    const value = React.useMemo(() => ({ categories, brands, errBrands, loadingBrands, loadingBrands, mutateBrands, mutateCategories }), [
      categories, 
      brands
    ]);
  
    return <GlobalStateContext.Provider value={value} {...props} />;
  }
  
  // a hook to use whenever we need to consume data from `GlobalStateProvider`.
  // So, We don't need React.useContext everywhere we need data from GlobalStateContext.
  
  export function useGlobalState() {
    const context = React.useContext(GlobalStateContext);
  
    if (!context) {
      throw new Error("You need to wrap GlobalStateProvider.");
    }
  
    return context;
  }