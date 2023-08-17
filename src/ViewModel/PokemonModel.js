import { ref, computed, onMounted } from 'vue'

export default function usePokemonModel(){
    const pokemonList = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = 4;

    // Hitung total page bestie
    const totalPages = computed(() => {
        return Math.ceil(pokemonList.value.length / itemsPerPage);
    });

    // Akses index pokemon dari current page
    const displayedPokemon = computed(() => {
        const startIndex = (currentPage.value - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return pokemonList.value.slice(startIndex, endIndex);
    });

    // Set current page
    const setCurrentPage = (page) => {
        currentPage.value = page;
    };

    const fetchEachPokemon = async (item) => {
        try {
            const response = await fetch(
                `${"https://pokeapi.co/api/v2/pokemon/" + item.name}`
            );
            let data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    onMounted(async () => {
        try {
            // Offset apaan bang?
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
            let data = await response.json();
            let results = await data.results;

            const pokemonDataArray = await Promise.all(
                results.map((item) => fetchEachPokemon(item))
            );

            pokemonList.value = pokemonDataArray.filter((data) => data !== null);
        } catch (error) {
            console.error(error);
        }
    });

    return { displayedPokemon, currentPage, totalPages, setCurrentPage };
}
