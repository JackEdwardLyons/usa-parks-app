<template>
  <Page class="page">
    <ActionBar class="action-bar" title="USA Parks App">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">

      <Label class="text-center h2" text="USA Parks" />
      <Label class="body text-center" textWrap=true text="This is where you can find USA Parks Data."/>

      <Label class="text-danger" v-if="warningMessage" :text="warningMessage" />
      <Label class="text-danger text-center" v-if="parksData.length === 0" text="Loading data..." />

      <ListView v-show="parksData.length" class="list-group" for="park in parksData" style="height: 1200px">
          <v-template>
            <FlexboxLayout flexDirection="column" class="list-group-item">
              <Label :text="park.name" class="list-group-item-heading" />
              <Label :text="park.description" class="list-group-item" textWrap="true" />
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
      warningMessage: '',
      parksData: [],
      surprise: false
    }
  },
  created () {
    // usa parks data
    let apiKey = environment.NPS_API_KEY
    axios.get('https://developer.nps.gov/api/v1/parks?api_key=' + apiKey)
      .then(data => {
        this.parksData = data.data.data
      })
      .catch(e => this.warningMessage = e)
  }
}
</script>

<style scoped>
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-weight: bold;
}

.h2 {
  font-size: 24px;
}

.hello-world {
  margin: 20;
}

.list-group-item-heading {
  font-weight: bold;
  color: firebrick;
}

.list-group-item {
  color: black;
}
</style>
