<template>
    <div>
        <aimee-date-picker v-model="value1"></aimee-date-picker>
        <!-- <aimee-date-range-picker v-model="value2"></aimee-date-range-picker> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: new Date(),
            value2: []
        }
    }
}
</script>