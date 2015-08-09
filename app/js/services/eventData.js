eventsApp.factory('eventData', function() {
	return {
		event: {
            name: 'Angular Boot Camp Training Event',
            date: 1420092000000,
            time: '11:20 am',
            location: {
                address: '1925 South 3rd St',
                city: 'Minneapolis',
                state: 'MN',
                zip: '55455'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Master Angular Directives',
                    creatorName: 'Craig Gjerdingen',
                    //duration: '2 hrs',
                    duration: 4,
                    level: '300',
                    abstract: 'This session will Bonbon sesame snaps jelly jelly macaroon brownie candy. Biscuit wafer lollipop chocolate cake. Bear claw sweet roll brownie wafer biscuit cake. Brownie pastry cotton candy pastry gingerbread bonbon apple pie. Sesame snaps jelly pie. Biscuit danish apple pie jelly-o cake tart cake. Lemon drops tootsie roll sweet lemon drops halvah.',
                    upVoteCount: 0
                },
                {
                    name: 'Master Angular Scope',
                    creatorName: 'Guy Gaskin',
                    //duration: '1.5 hrs',
                    duration: 3,
                    level: '100',
                    abstract: 'This session will check it out doggy fo shizzle my nizzle. Nullam fo shizzle velizzle, pimpin volutpizzle, suscipizzle quis, gravida vizzle, boofron. Pellentesque get down get down fizzle. Shit erizzle. Fizzle fo shizzle dolizzle get down get down',
                    upVoteCount: 0
                },
                {
                    name: 'Master Angular Controllers',
                    creatorName: 'Chan Li',
                    //duration: '2 hrs',
                    duration: 1,
                    level: '200',
                    abstract: 'This session will rub face on owner chew iPad power cord leave dead animals as gifts. Spread kitty litter all over house cough furball but rub face on owner and sit by the fire but chew iPad power cord, and roll on the floor purring your whiskers off. Chew foot. Play ',
                    upVoteCount: 0
                }
            ] //end session array
        } //end event
	}; //end return
});
 