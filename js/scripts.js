$(document).ready(function() {

  // the basics
  // ----------

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });

  // bloodhound
  // ----------

  // constructs the suggestion engine
  var states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: states
  });

  $('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: states
  });

  // prefetch
  // --------

  
  // remote
  // ------

  var atividadesEconomicas = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('descricao'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'data/atividades.json',
    remote: {
      url: 'data/%QUERY.json',
      wildcard: '%QUERY'
    }
  });

  $('#remote .typeahead').typeahead(null, {
    name: 'atividades-economicas',
    display: 'descricao',
    source: atividadesEconomicas
  });

  // default suggestions
  // -------------------

  

  // custom templates
  // ----------------

  $('#custom-templates .typeahead').typeahead(null, {
    name: 'atividades-economicas',
    display: 'descricao',
    source: atividadesEconomicas,
    templates: {
      empty: [
        '<div class="empty-message">',
          'Não foi possível encontrar uma atividade econômica com base nos termos que você informou',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<div><strong>{{descricao}}</strong> – {{cnae}}</div>')
    }
  });

  // multiple datasets
  // -----------------


 
});