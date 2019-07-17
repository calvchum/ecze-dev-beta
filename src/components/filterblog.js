import React, { Component } from "react"
import CheckBox from "./checkbox"
import styled from 'styled-components'
import { media } from "../utilities"

const FilterList = styled.ul`
  list-style: none;
  margin: 0em;
  max-width: 250px;
  position: sticky;
  top: 10%;
  left: 1em;
`;

export default class FilterBlog extends Component {
  constructor() {
    super()
    this.state = {
      categories: [],
    }
    this.handleCheckChildElement = this.handleCheckChildElement.bind(this)
  }
  // create an object that has id = i, value = {category}, isChecked: true
  // make the array of categories unique
  componentDidMount() {
    const categories = this.props.categories
    const uniqueCategories = new Set(categories)
    let categoriesArray = []
    uniqueCategories.forEach((category, i) => {
      let categoryObject = {
        id: i,
        value: category,
        isChecked: false,
      }
      categoriesArray.push(categoryObject)
    })
    this.setState({
      categories: categoriesArray,
    })
    this.props.updateSelectedCategories(categoriesArray)
  }

  handleCheckChildElement(event) {
    let categories = this.state.categories
    categories.forEach(category => {
      if (category.value === event.target.value && category.isChecked)
        category.isChecked = false
      else if (category.value === event.target.value && !category.isChecked)
        category.isChecked = true
    })
    this.setState({ categories: categories })
    this.props.updateSelectedCategories(this.state.categories)
  }

  render() {
    return (
      <div>
        <FilterList>
          {this.state.categories.map((category, i) => {
            return (
              <CheckBox
                category={category}
                checked={category.isChecked}
                key={i}
                handleCheckChildElement={this.handleCheckChildElement}
              />
            )
          })}
        </FilterList>
      </div>
    )
  }
}
