<template>
  <Page class="page">
    <ActionBar class="action-bar" title="USA Parks App">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">
      
      <!-- Header Elements -->
      <Label class="text-center h2" text="USA Parks" />
      <Label class="body text-center" textWrap=true text="This is where you can find USA Parks Data."/>
     
      <!-- Native SearchBar -->
      <SearchBar hint="Search hint" v-model="searchPhrase" @submit="onSearchSubmit" />
     
      <!-- Warning || Loading -->
      <Label class="text-danger" v-if="warningMessage" :text="warningMessage" />
      <Label class="text-danger text-center m-tb-1" v-if="loading" text="Loading data..." />
      
      <!-- Results with Native ListView -->
      <ListView v-show="parksData.length" class="list-group" for="park in parksData" style="height: 1200px">
          
          <v-template>

            <FlexboxLayout flexDirection="column" class="list-group-item">
              
              <Label :text="park.name" class="list-group-item-heading" />
              <Label :text="park.description" class="list-group-item" textWrap="true" />
              
              <StackLayout>
                <Button class="btn btn-primary" @tap="$router.push({ name: 'parkDetail', params: { id: park } })">Search Parks</Button>
              </StackLayout>

            </FlexboxLayout>

          </v-template>

      </ListView>

    </StackLayout>
    
  </Page>
</template>

<script>
import environment from '../environment.js'
import axios from 'axios'

export default {
  data () {
    return {
      loading: false,
      warningMessage: '',
      parksData: [],
      searchPhrase: ''
    }
  },
  methods: {
    onSearchSubmit () {
      // usa parks api documentation 
      // => https://www.nps.gov/subjects/developer/api-documentation.htm
      this.loading = true
      let query = this.searchPhrase.toLowerCase()
      let apiKey = environment.NPS_API_KEY
      axios.get(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=${apiKey}`)
        .then(data => {
          this.parksData = data.data.data.filter(park => park.name.toLowerCase().includes(query))
          console.log(this.parksData)
        })
        .then(() => this.loading = false)
        .catch(e => this.warningMessage = e)
      }
  }
}
</script>

<style>



</style>
