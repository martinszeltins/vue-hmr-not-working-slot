
<template>
    <div>
        <div class="card">
            <TabView v-model:activeIndex="isTabActive" :scrollable="true">
                <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                    <p>{{ tab.content }}</p>

                    This content does not HMR automatically !!!
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import TabView from 'primevue/tabview'
    import TabPanel from 'primevue/tabpanel'

    const isTabActive = ref(0)

    const scrollableTabs = ref(Array.from({ length: 5 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` })))
</script>
