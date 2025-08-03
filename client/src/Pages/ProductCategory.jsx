import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { categories } from "../assets/assets";
import ProductCard from "../Components/ProductCard";



const ProductCategory = () => {
    const {products} = useAppContext()
    const {category } = useParams()

    const searchCategory = categories.find((item) => item.path.toLocaleLowerCase() === category)

    const filterProducts = products.filter((product) =>product.category.toLocaleLowerCase() === category)
    return (
        <div className="mt-16">
            {
                searchCategory && (
                 <div className="flex flex-col items-center w-max">
                     <p className="text-2xl font-medium">{searchCategory.text.toUpperCase()}</p>
                    <div className="w-16 h-0.5 bg-primary rounded-full"></div>
                 </div>
                )
            }
            {
                filterProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-6">
                        {
                            filterProducts.map((product) =>(
                                <ProductCard key={product._id} product={product}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[60vh]">
                        <p className="text-4xl font-bold text-center text-primary">Not products found in this category</p>

                    </div>
                )
            }
        </div>
    );
};

export default ProductCategory;