import './Blog.scss'
import { BlogCard, Title } from '../../components'
import { BlogArticles } from '../../constants/Data'

function Blog() {
  return (
    <section id="blog" className="blog">
        <div className="blog-container container">
        <Title
            title='Blog'
         />
         <div className="blog-content">
            {
              BlogArticles.map((data, index) => (
                <BlogCard
                key={index}
                {...data}
                 />
              ))
            }
         </div>
        </div>
    </section>
  )
}

export default Blog