import PocketBase from "pocketbase"
const pb = new PocketBase(import.meta.env.VITE_DEV_URL)
export default pb