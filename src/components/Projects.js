import projects from '../data/projects.json'
import React, { Component } from 'react';
import Project from './Project';



class Projects extends Component {
    constructor(title,imgName,description) {
        super(),
        this.state =  { 
            complete: projects.allProjects
        }
    }
    render() {
        return(
        <div>
            {
                this.state.complete.map((e) => {
                    return <Project 
                    title = {e.title}
                    imgName = {e.imgName}
                    description = {e.description}
                    />
                })
                
            }
        </div>
        )
    }
}

export default Projects;
