function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
  }

module.exports = formatDate