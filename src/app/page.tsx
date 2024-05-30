import { Star } from "lucide-react"

export default function Home() {

  const produtos = [
    { id: 1, nome: "Nike Air Max", preco: 500, imagem: "https://imgnike-a.akamaihd.net/1920x1920/007581ID.jpg" },
    { id: 2, nome: "Adidas Superstar", preco: 400, imagem: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Tenis_Superstar_Preto_EG4959_01_standard.jpg" },
    { id: 3, nome: "Puma Future Rider", preco: 300, imagem: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/393825/04/sv01/fnd/BRA/w/1000/h/1000/fmt/png" },
    { id: 4, nome: "Reebok Classic", preco: 200, imagem: "https://reebokbr.vtexassets.com/arquivos/ids/168431-800-auto?v=638471618942500000&width=800&height=auto&aspect=true" },
    { id: 5, nome: "Vans Old Skool", preco: 150, imagem: "https://surfalive.fbitsstatic.net/img/p/tenis-vans-old-skool-pro-skate-classics-black-white-96327/266671.jpg?w=800&h=800&v=no-change&qs=ignore" },
    { id: 6, nome: "Converse All Star", preco: 100, imagem: "https://converse.com.br/media/catalog/product/C/T/CT09820002_A_107x1_1_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897" },
  ]

  return (
    <main className="flex min-h-screen flex-col p-12" >
      <h1 className="text-4xl font-bold text-teal-500 mb-4" >Senac Shop</h1>

      <section className="flex gap-4 flex-wrap">
        {produtos.map((produto) => {
          return (
            <article className="flex flex-col p-4 bg-teal-950 rounded-lg shadow-md" >
              <img src={produto.imagem} alt={produto.nome} className="h-64 object-cover" />
              <Star className="fill-amber-100 stroke-none cursor-pointer" />
              <h2 className="text-xl font-bold text-teal-500" >{produto.nome}</h2>
              <p className="text-gray-500" >R$ {produto.preco}</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md" >Comprar</button>
         </article>
          )
        })}
      </section>
    </main>
  )
}
