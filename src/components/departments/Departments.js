import React, { Fragment, useContext, useEffect } from 'react'
import DepartmentContext from '../../context/department/departmentContext'

// material ui imports
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

// import images
import marketing from './images/marketing.jpg'
import finance from './images/finance.jpg'
import management from './images/management.jpg'
import info_system from './images/info_system.jpg'
import accounting from './images/accounting.jpg'
import supply_chain from './images/supply_chain.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Departments = () => {
  const classes = useStyles();

  const departmentContext = useContext(DepartmentContext);
  const { departments, getDepartments } = departmentContext;
  let compDepartments = departments

  useEffect(() => {
    getDepartments();
    // eslint-disable-next-line
  }, [])

  let images = [marketing, finance, management, info_system, accounting, supply_chain];
  const addImages = () => {
    for (let i = 0; i < departments.length; i++) {
      compDepartments[i].img = images[i]
    }
  }

  addImages()

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Departments</ListSubheader>
        </GridListTile>

        {compDepartments.map(department => (
          <GridListTile key={department.id}>
            <img src={department.img} alt={department.image} />
            <GridListTileBar
              title={department.name}
              subtitle={department.text}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Departments;