<template>
    <Page class="page">
        <ActionBar class="action-bar" :title="parkDetail.name">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
        </ActionBar>

        <StackLayout orientation="vertical">
            <!-- Park Title -->
            <Label text="The Park Detail Page" class="text-center" fontWeight="bold" />
            <label :text="parkDetail.name" class="text-center" color="#006968" fontWeight="bold" />
            <!-- Park Description -->

            <!-- Weather Information -->
            <label text="Weather Overview" class="text-center" fontWeight="bold" />
            <label :text="parkDetail.weatherInfo" textWrap=true />
            <!-- Directions & Location -->

        </StackLayout>
    </Page>
</template>

<script>
export default {
    data () {
        return {
            parkDetail: this.$route.params.id
        }
    }
}
</script>

<style>
    StackLayout Label {
        margin: 10;
    }
</style>
