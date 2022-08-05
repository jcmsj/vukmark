import { useKeeper } from "./Keeper";

const bm = {selector:"#div", percentage:0, text:"Hello world!"}
async function main() {
  const k = await useKeeper("Bookmarks", "Test")
  document.getElementById("r")?.addEventListener("click", () => {
    k.remove(bm)
  })
  
  document.getElementById("g")?.addEventListener("click", () => {
    k.getAll()
  })

  k.put(bm)
}

main()
