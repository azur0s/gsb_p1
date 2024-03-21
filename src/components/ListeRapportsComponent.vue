<template>
  <div>
      <table v-if="shouldShowData" class="report-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Bilan</th>
            <th>Motif</th>
            <th>Nom Visiteur</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.date }}</td>
            <td>{{ item.bilan }}</td>
            <td>{{ item.motif }}</td>
            <td>{{ item.nom }}</td>
          </tr>
        </tbody>
      </table>
      </div>
</template>

<style scoped>
.report-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.report-table th, .report-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.report-table th {
  background-color: #f2f2f2;
}

.loading-message, .no-data-message {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  font-style: italic;
  color: #666;
  border: 1px solid #ddd;
}

</style>

<script>
export default {
  name: 'ListeRapportsComponent',
  data() {
    return {
      isLoading: true,
      items: [],
    };
  },
  computed: {
    shouldShowData() {
      return !this.isLoading && this.items.length > 0;
    },
  },
  mounted() {
    this.$store.state.dataService
      .getLesRapports(this.$store.state.medecin.id)
      .then(
        (data) => {
          this.items = data;
        }
      )
      .catch(
        (error) => {
          console.error(error);
        }
      )
      .finally(() => {
        this.isLoading = false;
      });
    this.$parent.maj++;
  },
};
</script>