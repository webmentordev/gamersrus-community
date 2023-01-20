<template>
    <section class="header-wipe">
        <div class="overlay"></div>
        <div class="header-container">
            <div class="box-wipe">
                <h1> {{ data }} Wipe Schedule</h1>
                <p>Here is Complete Year BP and RP Wipe Schedule.<br> Monthly Forced Wipe Schedule. Monthly Blueprint Wipe <br>Timing is according to Sydney Time.</p>
                <ul>
                    <NuxtLink to="steam://connect/45.88.231.43:28015">Connect</NuxtLink>
                    <NuxtLink to="https://discord.gg/hwqjNwN2cp" target="_blank">Discord</NuxtLink>
                </ul>
            </div>
        </div>
    </section>


    <section class="wipe-box">
      <div class="container">
          <h1>Wipe Schedule Of Year {{ data }}: <br> <span>Posted By iLoBBer <i><Icon name="material-symbols:check-small-rounded" /></i></span></h1>
          <div class="box">
              <!-- <h3>Wipe & Purge Schedules </h3>
              <ul class="list">
                  <li><i><Icon name="material-symbols:check-small-rounded" /></i><span>Purge</span> Starts 2 hours before Wipe Day.</li>
                  <li><i><Icon name="material-symbols:check-small-rounded" /></i><span>Serve wipe</span> after 7 days Thursday Evening. </li>
                  <li><i><Icon name="material-symbols:check-small-rounded" /></i><span>Blueprints</span> wipe at First Thursday Of every Month (Force Wipe)</li>
                  <li><i><Icon name="material-symbols:check-small-rounded" /></i><span>RP Wipe</span> 2 Months Wipe.</li>
                  <li><i><Icon name="material-symbols:check-small-rounded" /></i><span>XP-Levels</span> Never Wipe.</li>
              </ul> -->
              <table>
                  <tr>
                      <th>Wipe Day</th>
                      <th>Day</th>
                      <th>Wipe</th>
                      <th class="text-end">Status</th>
                  </tr>
                  <tr v-for="(date, index) in dateDatabase" :key="index" class="text-center">
                        <td>{{ date.date }}</td>
                        <td>Friday</td>
                        <td>6:00 AM - SydneyTime</td>
                        <td class="text-end">{{ date.status }}</td>
                  </tr>
              </table>
          </div>
      </div>
  </section>
</template>

<script setup>
    useHead({
        title: 'Wipe Schedule — Gamer R Us',
    });

    const data = new Date().getFullYear();
    
    function firstFridayOfMonth(year) {
        const firstFridays = [];
        const today = new Date();
        for (let month = 0; month < 12; month++) {
            const firstDay = new Date(year, month, 1);
            let dayOfFirst = firstDay.getDay();
            if (dayOfFirst <= 5) {
                dayOfFirst = 5 - dayOfFirst;
            } else {
                dayOfFirst = 11 - dayOfFirst;
            }
            
            const firstFriday = new Date(year, month, 1 + dayOfFirst);
            
            let status = "";
            
            if (firstFriday < today) {
                status = "Wiped";
            }else if (firstFriday > today) {
                status = "Active";
            }else {
                status = "WipeToday";
            }
            firstFridays.push({
                date: firstFriday.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').join('-'),
                status
            });
        }
        return firstFridays;
    }
    const dateDatabase = firstFridayOfMonth(2023)
</script>