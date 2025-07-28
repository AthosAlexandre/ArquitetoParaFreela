<template>
  <div id="blog">
    <v-container>
      <h1 class="subtitulo text-h4">Blog</h1>

      <!-- Campo de busca -->
      <v-text-field
        v-model="search"
        label="Pesquisar"
        prepend-inner-icon="mdi-magnify"
        outlined
        hide-details
        class="mb-4"
      ></v-text-field>

      <!-- Listagem de publicações como cards -->
      <v-row class="container-publicacoes" dense>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="post in paginatedPosts"
          :key="post.id"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img
              :src="post.image"
              height="200px"
              cover
            ></v-img>

            <v-card-title>
              {{ post.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ post.subtitle }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" text>
                Leia mais
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="toggle(post)">
                <v-icon>{{ post.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="post.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ post.content }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>

      <!-- Paginação -->
      <div class="text-center mt-4">
        <v-pagination
          v-model="page"
          :length="pageCount"
          circle
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      search: '',
      page: 1,
      itemsPerPage: 6,
      posts: [
        {   
            id: 1, 
            title: 'Top western road trips', 
            subtitle: '1,000 miles of wonder', 
            image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            show: false 
        },
        { 
            id: 2, 
            title: 'Exploring the mountains', 
            subtitle: 'The thrill of heights', 
            image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
            content: 'Pellentesque habitant morbi tristique senectus et netus.', 
            show: false 
        },
        {   
            id: 3, 
            title: 'Beachside paradise', 
            subtitle: 'Sun, sand, sea', 
            image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', 
            content: 'Vestibulum ante ipsum primis in faucibus orci luctus.', 
            show: false 
        },
        { 
            id: 4, 
            title: 'City lights at night', 
            subtitle: 'Urban exploration', 
            image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
            content: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus.', 
            show: false 
        },
        { 
            id: 5, 
            title: 'Culinary journeys', 
            subtitle: 'Tastes from around the world', image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', 
            content: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet.', 
            show: false 
        },
        { 
            id: 6, 
            title: 'Historical landmarks', 
            subtitle: 'Stepping back in time', 
            image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', 
            content: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed.', 
            show: false 
        },
        { 
            id: 7, 
            title: 'Forest adventures', 
            subtitle: 'Into the wild', 
            image: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg', 
            content: 'Curabitur sodales ligula in libero. Sed dignissim lacinia.', 
            show: false 
        },
        { 
            id: 8, title: 'Desert escapes', 
            subtitle: 'Under the scorching sun', 
            image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', 
            content: 'Maecenas ipsum velit, consectetur id, consequat posuere elit.', 
            show: false 
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    pageCount() {
      return Math.ceil(this.filteredPosts.length / this.itemsPerPage)
    },
    paginatedPosts() {
      const start = (this.page - 1) * this.itemsPerPage
      return this.filteredPosts.slice(start, start + this.itemsPerPage)
    }
  },
  methods: {
    toggle(post) {
      post.show = !post.show
    }
  }
}
</script>

<style scoped>
#blog {
  border-top: 1px solid rgba(0, 0, 0, 0.363);
}
.subtitulo {
  text-align: center;
  margin: 15px;
}
.container-publicacoes {
  margin-top: 20px;
}
</style>
